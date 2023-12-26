import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLucesEmergenciaIluminacion extends BasePage {

    readonly LUCES_EMERGENCIA_ILUMINACION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LUCES_EMERGENCIA_ILUMINACION = this.page.locator('//a [@id="menu-item-category-luces-emergencias-iluminacion"]')
    }

    async clickBazarTextilLucesEmergenciaIluminacion(): Promise<void> {
        await this.click(this.LUCES_EMERGENCIA_ILUMINACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLucesEmergenciaIluminacion(): Promise<void> {
        await this.clickBazarTextilLucesEmergenciaIluminacion()
    }
}
