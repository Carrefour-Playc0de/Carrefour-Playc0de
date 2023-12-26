import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia extends BasePage {

    readonly AGRONOMIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AGRONOMIA = this.page.getByText('Agronomía', { exact: true })
    }

    async clickAgronomia(): Promise<void> {
        await this.click(this.AGRONOMIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperCiudAutonoBsAsAgronomia(): Promise<void> {
        await this.clickAgronomia()
    }
}
